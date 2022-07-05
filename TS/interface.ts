//defined interface with properties ht and wt
interface Dimension {
    width: string;
    height: string;
}

let _imagedim: Dimension = {
    width: "200px",
    height: "300px"
};

interface User {
    id: number;
    firstName: string;
    lastName: string;
    getFullName(): string;
  }
  const user: User = {
    id: 12,
    firstName: "Josh",
    lastName: "",
    getFullName: () => `${firstName} ${lastName}` //since the property is missing it throws an error 
  };

//class implement interface 
class NameofClass implements Interface {
}
interface Size {
    width : string,
    height: string,
    getWidth(): string; 
}

class Shapes implements Size {
    width: string;
    height: string;
    constructor (width:string, height:string) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
}