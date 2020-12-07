	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Constraint = Matter.Constraint;

	var engine, world;
	var holder,ball,ground;
	var stand1,stand2;
	var ball;
	var slingShot;
	var polygon_img;
	function preload(){
	polygon_img=loadImage("polygon.png");
	}
	function setup() {
	createCanvas(1707,700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);   

	stand0 = new Stand(856,670,1707,30);
	stand1 = new Stand(800,420,600,10);
	stand2 = new Stand(1400,320,600,10);
	


	box1 = new Block (581,390,50,50)
		box2 = new Block (631,390,50,50)
		box3 = new Block (681,390,50,50)
		box4 = new Block (731,390,50,50)
		box5 = new Block (781,390,50,50)
		box6 = new Block (831,390,50,50)
		box7 = new Block (881,390,50,50)
		box8 = new Block (931,390,50,50)
		box9 = new Block (981,390,50,50)
		box10 = new Block (1031,390,50,50)

		box01 = new Block (1220,295,50,50)
		box02 = new Block(1270,295,50,50)
		box03 = new Block (1320,295,50,50)
		box04 = new Block (1370,295,50,50)
		box05 = new Block (1420,295,50,50)
		box06 = new Block(1470,295,50,50)
		box07 = new Block(1520,295,50,50)
		box08 = new Block(1570,295,50,50)
	box09 = new Block(1620,295,50,50)
		box010 = new Block (1670,295,50,50)

		//creating the boxes : Box2

		box11 = new Block (606,340,50,50)
		box12 = new Block (656,340,50,50)
		box13 = new Block (706,340,50,50)
		box14 = new Block (756,340,50,50)
		box15 = new Block (806,340,50,50)
		box16 = new Block (856,340,50,50)
		box17 = new Block (906,340,50,50)
		box18 = new Block (956,340,50,50)
		box19 = new Block (1006,340,50,50)

		box011 = new Block (1245,245,50,50)
		box012 = new Block (1295,245,50,50)
		box013 = new Block (1345,245,50,50)
		box014 = new Block (1395,245,50,50)
		box015 = new Block (1445,245,50,50)
		box016 = new Block (1495,245,50,50)
		box017 = new Block (1545,245,50,50)
		box018 = new Block (1595,245,50,50)
		box019 = new Block (1645,245,50,50)

		//creating the boxes :: box3
		box20 = new Block (631,290,50,50)
		box21 = new Block (681,290,50,50)
		box22 = new Block (731,290,50,50)	
		box23 = new Block (781,290,50,50)
		box24 = new Block (831,290,50,50)
		box25 = new Block (881,290,50,50)
		box26 = new Block (931,290,50,50)
		box27 = new Block (981,290,50,50)

		box020 = new Block(1270,195,50,50)
		box021 = new Block(1320,195,50,50)
		box022 = new Block(1370,195,50,50)	
		box023 = new Block(1420,195,50,50)
		box024 = new Block(1470,195,50,50)
		box025 = new Block(1520,195,50,50)
		box026 = new Block(1570,195,50,50)
		box027 = new Block (1620,195,50,50)
		
		//creating the boxes :: box4
		
		box28 = new Block (656,240,50,50)
		box29 = new Block(706,240,50,50)
		box30 = new Block(756,240,50,50)
		box31 = new Block(806,240,50,50)
		box32 = new Block(856,240,50,50)
		box33 = new Block(906,240,50,50)
	box34 = new Block(956,240,50,50)
	
		box028 = new Block (1295,145,50,50)
		box029 = new Block(1345,145,50,50)
		box030 = new Block(1395,145,50,50)
		box031 = new Block(1445,145,50,50)
		box032 = new Block(1495,145,50,50)
		box033 = new Block(1545,145,50,50)
		box034 = new Block(1595,145,50,50)

	//ball holder with slings
	polygon = Bodies.circle(470,270,80);
	World.add(world,polygon);

	slingShot = new Slingshot(this.polygon,{x:470,y:270});

	}
	function draw() {
	background(56,44,44); 
	
	//Engine.update(engine);
	textSize(25) 
	text(mouseX + ',' + mouseY, 10, 25);
	

	stand0.display();
	stand1.display();
	stand2.display();



	// displaying the boxes : box1 //
	fill("skyblue")

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();

	box01.display();
	box02.display();
	box03.display();
	box04.display();
	box05.display();
	box06.display();
	box07.display();
	box08.display();
	box09.display();
	box010.display();

		// displaying the boxes : box2 //
	fill("pink")
	
		box11.display();
		box12.display();
		box13.display();
		box14.display();
		box15.display();
		box16.display();
		box17.display();
		box18.display();
		box19.display();

		box011.display();
		box012.display();
		box013.display();
		box014.display();
		box015.display();
		box016.display();
		box017.display();
		box018.display();
		box019.display();


		//displaying the boxes : box3 //

	fill("orange")
		box20.display();
		box21.display();
		box22.display();
		box23.display();
		box24.display();
		box25.display();
		box26.display();
		box27.display();
		
		box020.display();
		box021.display();
		box022.display();
		box023.display();
		box024.display();
		box025.display();
		box026.display();
		box027.display();
		//displaying the boxes : box4 //
	fill("white")
		box28.display();
		box29.display();
		box30.display();
		box31.display();
		box32.display();
		box33.display();
		box34.display();

		box028.display();
		box029.display();
		box030.display();
		box031.display();
		box032.display();
		box033.display();
		box034.display();

	imageMode(CENTER)
	image(polygon_img ,polygon.position.x,polygon.position.y,100,100);

	slingShot.display();
	}
	function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
	}
	function mouseReleased(){
	slingShot.fly();
	}
	function keyPressed (){
		if(keyCode===32){
			
			slingShot.attach(this.polygon);
		}
	}
