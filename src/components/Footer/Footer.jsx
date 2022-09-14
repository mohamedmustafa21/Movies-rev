import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#000' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor:  '#000'  }}>
        © 2020 Copyright:
        <a className='text-white' href='/'>
          MuhamedMustafa
        </a>
      </div>
    </MDBFooter>
  );
}