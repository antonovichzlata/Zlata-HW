function Car(autoBrand, wheelDrive, speed = 0) {
    this.autoBrand = autoBrand;
    this.wheelDrive = wheelDrive;
    this.speed = speed;

    this.showSpeed = function () {
        console.log(this.speed);
        return this;
    }

    this.accelerate = function (deltaSpeed) {
        this.speed += deltaSpeed;
        return this;
    }
}

const cars = [
    { autoBrand: 'BMW',        wheelDrive: 'задній' },
    { autoBrand: 'Audi',       wheelDrive: 'повний' },
    { autoBrand: 'Toyota',     wheelDrive: 'передній' },
    { autoBrand: 'Subaru',     wheelDrive: 'повний' },
    { autoBrand: 'Mercedes',   wheelDrive: 'задній' }
];


const autoPark = []
for (let vehicle of cars) {
    autoPark.push(new Car(vehicle.autoBrand, vehicle.wheelDrive));
};

autoPark[2].accelerate(20).showSpeed().accelerate(60).showSpeed()