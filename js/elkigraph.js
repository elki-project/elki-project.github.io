/* Copyright (C) 2011 Erich Schubert
This JavaScript code is free software: you can redistribute it and/or
modify it under the terms of the GNU General Public License (GNU GPL)
as published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.  The code is
distributed WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU GPL
for more details.

As additional permission under GNU GPL version 3 section 7, you may
distribute non-source (e.g., minimized or compacted) forms of that
code without the copy of the GNU GPL normally required by section 4,
provided you include this license notice and a URL through which
recipients can access the Corresponding Source.
*/
// This is a simple force-directed graph. It's essentially
// unoptimized, and some parameters might need to be tweaked for your
// data set. Visualization is deliberately kept separate!

// A single node
Node = function() {
	// Mass
	this.size = .02;
	// Current position
	this.px = Math.random() - .5;
	this.py = Math.random() - .5;
	// Current velocity
	this.vx = 0;
	this.vy = 0;
	// Current force
	this.fx = 0;
	this.fy = 0;
	// Speed
	this.speed = 1.0;
}
// Edge type
Edge = function(nodeA, nodeB, len, weight) {
	this.nodeA = nodeA;
	this.nodeB = nodeB;
	this.len = len;
	this.weight = weight;
}
Edge.prototype.update = function(len, weight) {
	this.len = len;
	this.weight = weight;
}
// The whole graph
Graph = function() {
	this.repulse = .0015;
	this.center_force = .015;
	this.damping = 0.95;
	this.vscale = .005;
	this.nodes = [];
	this.edges = [];
}
// Distance function
Distance = function(nodeA, nodeB) {
	this.dx = nodeA.px - nodeB.px;
	this.dy = nodeA.py - nodeB.py;
	this.d = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
	// normalize dx, dy to a vector length of 1
	if (this.d > 0) {
		this.dx /= this.d;
		this.dy /= this.d;
	}
}
// Make a new node
Graph.prototype.addNode = function() {
	var node = new Node();
	this.nodes.push(node);
	return node;
}
// Make/Update an edge
Graph.prototype.addEdge = function(nodeA, nodeB, len, weight) {
	// Try to update an existing edge:
	for (var i = 0; i < this.edges.length; i++) {
		var edge = this.edges[i];
		if (edge.nodeA == nodeA && edge.nodeB == nodeB) {
			edge.update(len, weight);
			return edge;
		}
	}
	// New edge
	var edge = new Edge(nodeA, nodeB, len, weight);
	this.edges.push(edge);
	return edge;
}
Graph.prototype.applyEdgeForce = function(edge) {
	var distance = new Distance(edge.nodeA, edge.nodeB);
	// Linear
	var attractive_force = (distance.d - edge.len) * edge.weight / 2;
	if (attractive_force > 0 || attractive_force < 0) {
		edge.nodeA.fx -= attractive_force * distance.dx;
		edge.nodeA.fy -= attractive_force * distance.dy;
		edge.nodeB.fx += attractive_force * distance.dx;
		edge.nodeB.fy += attractive_force * distance.dy;
	}
}
Graph.prototype.applyCenterForce = function(nodeA) {
	var distance = Math.sqrt( nodeA.px * nodeA.px + nodeA.py * nodeA.py );
	var dx = nodeA.px / distance;
	var dy = nodeA.py / distance;

	nodeA.fx -= this.center_force * this.nodes.length * dx * (distance * distance);
	nodeA.fy -= this.center_force * this.nodes.length * dy * (distance * distance);
}
Graph.prototype.applyRepulse = function(nodeA, nodeB, distance) {
	// Take radius into account
	var dsq = Math.max(0.00001, distance.d - nodeA.size - nodeB.size)
	dsq = dsq * dsq;
	if (dsq > 0) {
		var repulsive_force = -this.repulse / (nodeA.size + nodeB.size + dsq);
		nodeA.fx -= repulsive_force * distance.dx;
		nodeA.fy -= repulsive_force * distance.dy;
		nodeB.fx += repulsive_force * distance.dx;
		nodeB.fy += repulsive_force * distance.dy;
	}
}
Graph.prototype.applyForces = function() {
	// Reset forces
	for(var a = 0; a < this.nodes.length; a++) {
		var nodeA = this.nodes[a];
		nodeA.fx = 0;
		nodeA.fy = 0;
	}
	// Recompute forces -- center gravity and repulse
	for(var a = 0; a < this.nodes.length; a++) {
		var nodeA = this.nodes[a];
		this.applyCenterForce(nodeA);
		for(var b = a + 1; b < this.nodes.length; b++) {
			var nodeB = this.nodes[b];
			var dist = new Distance(nodeA, nodeB);
			this.applyRepulse(nodeA, nodeB, dist);
		}
	}
	// Recompute forces -- edges
	for(var i = 0; i < this.edges.length; i++) {
		this.applyEdgeForce(this.edges[i]);
	}
	// Apply forces to velocity, apply velocity to position
	var energy = 0.0;
	for(var a = 0; a < this.nodes.length; a++) {
		var nodeA = this.nodes[a];
		try { if (nodeA == this.selected) { continue; } }catch(e){};
		nodeA.vx = nodeA.vx * this.damping + nodeA.fx;
		nodeA.vy = nodeA.vy * this.damping + nodeA.fy;
		nodeA.px += nodeA.vx * nodeA.speed * this.vscale;
		nodeA.py += nodeA.vy * nodeA.speed * this.vscale;
		energy += (nodeA.vx * nodeA.vx + nodeA.vy * nodeA.vy) * nodeA.speed;
		//console.log(nodeA.fx, nodeA.fy, nodeA.vx, nodeA.vy, nodeA.speed);
	}
	return energy;
}
jQuery(function($){
var backopacity = 0.66;
var maxsize = 1;
var maxheig = 1;

var imgscale = 10;
var graph = new Graph();
//graph.repulse = .01;

// Add special nodes
var front = graph.addNode();
front.px = 0;
front.py = 2.2;
front.speed = 0;
front.odist = function(focus, node) {
    return (focus) ? 1.5 : (3 + node.prio * -2);
}

var back1 = graph.addNode();
back1.px = -1;
back1.py = -1;
back1.speed = 0;
back1.odist = function(node) {
    return Math.random() * node.prio;
}

var back2 = graph.addNode();
back2.px = 1;
back2.py = -1;
back2.speed = 0;
back2.odist = function(node) {
    return Math.random() * node.prio;
}

var specialnodes = graph.nodes.length;

function updateMaxsize(li) {
    li = $(li);
    var twi = li.find("img").width(); //.attr("width");
    var thi = li.find("img").height(); //.attr("height");
    if (twi > 0) { maxsize = Math.max(maxsize, twi); }
    if (thi > 0) { maxheig = Math.max(maxheig, thi); }
}
function makeGraphNode(li) {
    var node = graph.addNode();
    // Visible element
    node.dom = li;
    node.elem = $(li);
    node.idom = node.elem.find("img")[0];
    node.imgtag = $(node.idom);
    node.imgsize = node.imgtag.width();
    node.imgheig = node.imgtag.height();
    node.prio = node.imgsize / maxsize;
    // Size
    node.size = 0.05 * node.prio;
}
var frame = $($('.slideshow')[0]);
var fwidth = frame.width();
var fheight = frame.height();
// console.log("Size:", fwidth, fheight, frame);
function reposition() {
    // Apply forces to velocity, apply velocity to position
    for(var a = specialnodes; a < graph.nodes.length; a++) {
        var nodeA = graph.nodes[a];
        if (nodeA.elem) {
            var left = (nodeA.px + .5) * (fwidth - maxsize);
            left = Math.floor(left + (maxsize - nodeA.idom.width) / 2);
            var top = (nodeA.py + .5) * (fheight -maxheig) - maxheig * .25;
            top = Math.floor(top + (maxheig - nodeA.idom.height) / 2);
            nodeA.dom.style.left = left+"px";
            nodeA.dom.style.top = top+"px";
            //nodeA.elem.css({left:left, top:top});
        }
    }
}

var timer = null;
function startSpring() {
    clearInterval(timer);
    function tick() {
        var energy = graph.applyForces();
        //console.log(energy);
        if (energy < 0.00001 || !energy) {
            clearTimeout(timer);
        } else {
            setTimeout(tick, jQuery.fx.interval * 3);
        }
        reposition();
    }
    var timer = setTimeout(tick, jQuery.fx.interval * 3);
}
var lastFront = null;
function pullRandom() {
    // Pull a random user in front
    nodeR = graph.nodes[Math.floor(specialnodes + (graph.nodes.length - specialnodes) * (Math.random() % 1))];
    if (nodeR == lastFront && graph.nodes.length > specialnodes + 1) {
        // retry
        return pullRandom();
    } else {
        // weaken last node
        if (lastFront) {
            // restore weight
            lastFront.size = lastFront.size / 5;
            var wi = lastFront.imgsize;
            lastFront.elem.stop().animate({opacity: backopacity}, 600);
            lastFront.imgtag.stop().animate({width: wi}, 600);
            graph.addEdge(front, lastFront, front.odist(false, lastFront), .05);
        }
        // Strengthen new node
        nodeR.size = nodeR.size * 5;
        var wi = nodeR.imgsize * 2;
        nodeR.elem.stop().animate({opacity: 1.0}, 1500);
        nodeR.imgtag.stop().animate({width: wi}, 1500);
        graph.addEdge(front, nodeR, front.odist(true, nodeR), .1);
        // Reorder
        nodeR.elem.appendTo(nodeR.elem.parent());

        // Show name
        var title = nodeR.imgtag.attr("title");
        var desc = nodeR.imgtag.attr("alt");
        var caption = $($('.caption')[0]);
        // Hide the caption first, and then set and display the caption
        caption.slideToggle(300, function () {
            caption.find('h3').html(title);
            caption.find('p').html(desc);
            caption.slideToggle(500);
        });

        // remember
        lastFront = nodeR;
        // restart
        if (!timer) startSpring();
    }
}

function startForceGraph(speed) {
    // Reset opacity
    $('.slideshow ul li').css({opacity: backopacity, position:"absolute"});
    $('.slideshow ul li').each(function(i, o) { updateMaxsize(o); });
    $('.slideshow ul li').each(function(i, o) { makeGraphNode(o); });
    // Setup front-to-back for core
    for (var a = specialnodes; a < graph.nodes.length; a++) {
        var nodeA = graph.nodes[a];
        graph.addEdge(front, nodeA, front.odist(false, nodeA), .025);
        graph.addEdge(back1, nodeA, back1.odist(nodeA), .02);
        graph.addEdge(back2, nodeA, back2.odist(nodeA), .02);
    }

    startSpring();
    setInterval(pullRandom, 7000);
}
$(window).load(function() { startForceGraph(100); });
});
