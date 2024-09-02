import "@stdlib/deploy";



message Add{
    queryId: Int as uint64;
    amount: Int as uint32;
}
contract Counter with Deployable {

    //initializing an in
    id: Int as uint32;
    counter: Int as uint32;

    init(id: Int) {
        self.id = id;
        self.counter = 0;

    }




//get function
    get fun counter(): Int {
        return self.counter();
    }

    get fun id(): Int{
        return self.id();
    }
}
