class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		    strokeWeight(2);
		    fill("black")
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("orange");
			imageMode(CENTER);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

