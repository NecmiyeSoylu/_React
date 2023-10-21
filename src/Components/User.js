import React, { Component } from 'react'

class User extends Component { //hocam genel olarak yapıya bakarsak her component oluşturduğumuzda oluşturulan sınıfın 
                            //Component sınıfından extend edilmesi gerekiyor ayrıca içinde render fonksiyonu bulunmalı
  render() {
    return (
      <div> 
        <form>
            <input type='text'/>
            <button>send</button>
        </form>
      </div>
    );
  }
}
export default User;//! bu export etmek ne demek