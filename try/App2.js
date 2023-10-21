export default function Profile(){
    return(
        <div>
            <h1>{User.name}</h1>
            < img 
                src={User.img_adress}
                alt={"Photo of"+ User.name+" "+User.surname}
                style={{width:User.img_size , height:User.img_size}}

            />
        </div>
    )

}
const User = {
    name:"Necmiye",
    surname:"Soylu",
    age:23,
    department:"ceng",
    img_adress:"https://www.looper.com/img/gallery/the-untold-truth-of-brave/l-intro-1655581157.jpg",
    img_size:90
};
