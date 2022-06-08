import React from 'react'
import '../../App.css';
import waves from '../../img/waves.svg';
import { Header } from '../../common';
import { StartUse, TextStart, WhyMe } from '../index';

// import { fetchAllUsers } from '../../redux/slices/users';

// import { useDispatch, useSelector } from 'react-redux';

function Home() {
  // const { list: users } = useSelector(state => state.users);

  // const dispatch = useDispatch();

  // function mostrarDatos(datos) {
  //   datos.map( dato => console.log(dato.name))
  //   console.log("....................................................................")
  // }

  // React.useEffect(() => {
  //   dispatch(fetchAllUsers());
  //   console.log()
  // }, [dispatch])

  // users.map(user => mostrarDatos(user.collection))
  // users.for(user => console.log(user))

  return (
    <div className="App" >
      
      <div className="divContenedor">
        <Header />
        <div className="bodyStart">
          <TextStart />
        </div>
        <img className="waves" src={waves} alt="hola"></img>
      </div>
      
      <WhyMe />
      
      <StartUse />
    </div>

  );
}

export default Home;
