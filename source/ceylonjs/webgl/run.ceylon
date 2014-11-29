

shared void run() {
        
        // works
        createScene1();
        
        // does not work
        createScene2();
    
}

void createScene1(){
    dynamic{
        window.\iScene = THREE.\iScene;
        dynamic scene =  Scene();
        print("1) Scene autoUpdate is : ``scene.autoUpdate``");
    }
}

void createScene2(){
    dynamic DynThree{
        shared formal class Scene(){
            shared formal Boolean autoUpdate;
        }
    }
    
    DynThree dynthree;
    dynamic{
        dynthree = THREE;
    }
    DynThree.Scene scene = dynthree.Scene(); // runtime error : 'undefined is not function'
    print("2) Scene autoUpdate is : ``scene.autoUpdate``");

}





