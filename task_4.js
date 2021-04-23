class Parallelepiped {
    
    constructor(width, long, height){
        this.width = width;
        this.long = long;
        this.height = height;
    }

    getVolume() {
        return this.width * this.long * this.height;
    }
}

class Rectangle extends Parallelepiped {
    
    constructor(long, width){
        super(width);
        this.long = long;
    }

    getArea() {
        return this.width * this.long;
    }
}

const rect = new Parallelepiped (25, 10, 10);
console.log(rect.getVolume());

const newRect = new Rectangle (20, 20);
console.log(newRect.getArea());
