import React, { Component } from 'react'
import PropTypes from 'prop-types' //hocam prop type'ları ekledik

class User extends Component { //hocam genel olarak yapıya bakarsak her component oluşturduğumuzda oluşturulan sınıfın 
                            //Component sınıfından extend edilmesi gerekiyor ayrıca içinde render fonksiyonu bulunmalı
    static defaultProps = { //hocam gayat net props yani paremetre verilmemeis durumunda default paremetre tranımlandı
    name: "unknown",
    dep : "unknown",
    salary: "unknown"
  };
  render() {

    //Destructing
    const {name,dep,salary}=this.props;

    return (
      <div> 
        <ul>
          <li>Name: {name}</li>
          <li>Dep: {dep} </li>
          <li>Salary: {salary}$</li>
        </ul>
      </div>
    );
  }
}
User.propTypes = { //burada ise paremetre olarak gelecek olan  objeninn özselliklerini tanımladık. Hocam render'ın iöine props yazmaya yada paremere
                  //bildirmeye gerek yok zaten paremetre alacağını biliyoruz sıkıntı yok. 
                  //hocam aşşağıya inelim fonksiyonun içine girelim. const diyerek bir değişken hatta {} sayesinde bir obje oluşturduk. obje tipimde bir değişken oluşturduk
                  //içindeki attribute ları değişkelneri yazdık {name,dep,salary} daha sonra alınan parmetreyi buna aktadırk
                  //burada en alta da bu parmetreleri değişkenlerin özelliklerini belirttik string olacak alınmak zorunda vb.
  name: PropTypes.string.isRequired,
  dep: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired
};


export default User;