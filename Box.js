class Box{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body)
    }
display()
{
 var boxpos=this.body.position;
 push ();
 translate (boxpos.x,boxpos.y);
fill ("#FFD700");
rect(0,0,this.w,this.h)
pop ()
}


}
