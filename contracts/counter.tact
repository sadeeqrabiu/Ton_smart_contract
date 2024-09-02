import "@stdlib/deploy";

contract Counter with Deployable {

    //initializing an in
    id: Int as uint32;
    counter: Int as uint32;

    init(id: Int) {
        self.id = id;
        self.counter = 0;

    }
}
