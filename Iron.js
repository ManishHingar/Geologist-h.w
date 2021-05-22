class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options = {
        'restitution':0.8,
        'friction':3,
        'density':30.0
	}   
		
		this.width= 50
        this.height=50

		this.body=Bodies.rectangle(x,y,50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
			pop()
	}

}