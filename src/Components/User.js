import React, { Component } from 'react'

class User extends Component { //hocam genel olarak yapıya bakarsak her component oluşturduğumuzda oluşturulan sınıfın 
                            //Component sınıfından extend edilmesi gerekiyor ayrıca içinde render fonksiyonu bulunmalı
  render() {

    //Destructing
    const {name,dep,salary}=this.props;

    return (
      <div> 
        <ul>
          <li>Name:{name}</li>
          <li>Dep:{dep} </li>
          <li>Salary:{salary}$</li>
        </ul>
      </div>
    );
  }
}
export default User;//! bu export etmek ne demek