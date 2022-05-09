console.log('Service1.js is executed');

function Service1() {
    this.a = 0;

    this.print = function () {
        this.a++;
        console.log(this.a);
    }
}

const OBJ = new Service1();

export { OBJ };