
// declaring bool 
let dogru: boolean = false;

// declaring number
let numara: number = 5;

//declaring string
let isim: string = "tarık";

//declaring array
let dizi: Array<number> = [1, 2, 3, 4];

let dizim: Array<string> = ["a", "b"];

//typescript tip vermezsen oto ilk verdigini tip olarak alır .
let obje = 5;
// obje = "hello"; ** ERROR ** 

// declaring function
// input : string, return value : string olarak tanımlandı.
function selamla(blabla: string): string {

    return "hello";
}

// declaring enum
enum Yonler { ileri, geri, sag, sol };

if (Yonler.ileri == 1) {

}


//declaring interface

interface insan {
    yas: number,
    boy: number,
    ad: string,
    soyad: string,
    babaAdi?: string // optional
}

function insanYarat(insanObjesi: insan) {
    let yas = insanObjesi.yas;
    let boy = insanObjesi.boy;
    let ad = insanObjesi.ad;
    let soyad = insanObjesi.soyad;
    let babaAdi = insanObjesi.babaAdi; // optional olan birşeyle işlemler yaparken dikkatli ol.


}

// interface' yollanan ojede biri eksik olursa orda Vstudio zırlar.
insanYarat({
    yas: 10,
    boy: 170,
    ad: "tarık",
    soyad: "nural",
    babaAdi: "mustafa"
})



// declaring class

class Hayvan {
    private isim: string;

    constructor(isim: string) {
        this.isim = isim;
    }

    yuru(mesafe: number) {
        console.log(isim + " " + mesafe + " kadar yürüdü");
    }
}

let hayvan : Hayvan = new Hayvan("tarık");
hayvan.yuru(10);


//declaring a subclass

class Yilan extends Hayvan{
    kuyrukBoyu :string;

    constructor(kBoyu:string,isim:string){
        super(isim); 
        this.kuyrukBoyu = kBoyu;
    }
}


// decaring abstract class

abstract class Araba{
    teker:number;
    ayna:number;

    constructor(teker:number,ayna:number){
        this.teker = teker;
        this.ayna = ayna;
    }
}


class Passat extends Araba{
    private sunroof : boolean;

    constructor(teker:number,ayna:number,sunroof:boolean){
        super(teker,ayna);
        this.sunroof=sunroof;
    };


}

// Araba araba = new Araba();    not possible

let passat = new Passat(4,4,true); 


// declaring function

function ilet(mesaj :string, isim:string="default isim"):string{

    return mesaj + isim;
}

ilet("mesaj","tarık");  // isim optional sayılır, girilmezse değeri "default isim" olur.

function deneme():void{
    
    //return "asd"; **ERROR**
}


// declaring function in class

class Calisan{
    isim : string;

    constructor (isim:string){
        this.isim = isim;
    }

    calis(saat:number):void{
        console.log(this.isim + saat + " calisti ");
    }
}

let calisan = new Calisan("tarık");
calisan.calis(20);

