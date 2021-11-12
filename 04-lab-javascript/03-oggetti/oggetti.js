function Computer(processore, disco, ram) {
    this.processore = processore;
    this.disco = disco;
    this.ram = ram;
}

Computer.prototype.infoComputerConsole = function() {
    console.log("Processore: " +  this.processore + "; Disco: " + this.disco + "; Ram: " + this.ram);   
}

Computer.prototype.infoComputerDOM = function(id) {
    document.getElementById(id).innerHTML = `
        <p> Processore: ${this.processore} </p>
        <p> Disco: ${this.disco} </p>
        <p> Ram: ${this.ram} </p>
    `;
}

class Computer2 {
    constructor(processore, disco, ram) {
        this.processore = processore;
        this.disco = disco;
        this.ram = ram; 
    }

    infoComputerConsole = function() {
        console.log("Processore: " +  this.processore + "; Disco: " + this.disco + "; Ram: " + this.ram);
    }

    infoComputerDOM = function(id) {
        document.getElementById(id).innerHTML = `
            <p> Processore: ${this.processore} </p>
            <p> Disco: ${this.disco} </p>
            <p> Ram: ${this.ram} </p>
        `;
    }
}



const mioPc = new Computer("i7", "1TB", "32GB");
mioPc.infoComputerConsole();
mioPc.infoComputerDOM("miopc");

const mioPc2 = new Computer2("i9", "2TB", "64GB");

mioPc2.infoComputerConsole();
mioPc2.infoComputerDOM("miopc2");
