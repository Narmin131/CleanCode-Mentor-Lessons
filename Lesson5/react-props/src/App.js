import React from 'react'
import SingleUser from './components/SingleUser'
import UserItem from './components/UserItem'
import myData from './data/Data'
import SingleProduct from './components/SingleProduct'
import AppRouter from './router/AppRouter'
const App = () => {
  return (
    <>
      {/* <div>
        <SingleUser name='nermin' age='19' />
        <SingleUser name='ferhad' age='20' />
        <UserItem name='gulsen' age='20' />
      </div>

      <section>
        <div className="container">
          <div className="row">
            {
              myData.map((item, index) => (
                <SingleProduct image={item.image} title={item.title} desc={item.description} />
              ))
            }
          </div>
        </div>
      </section> */}

      <AppRouter/>
    </>
  )
}

export default App