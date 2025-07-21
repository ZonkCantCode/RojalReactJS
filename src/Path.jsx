import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ViewUser from './day6/ViewUser'
import Home from './day6/Home'
import Layout from './Layout'
import UserDetails from './day6/UserDetails'
import PageNotFound from './PageNotFound'
import DayNavigation from './day7/Component/DayNavigation';
import Array from './day2/array'; 
import Calc from './day2/Calc'; 
import Condition from './day2/Condition';
import Multiplication from './day2/Multiplication';
import Variable from './day2/Variable';
import Todo from './day8/Todo';


export default function Path() {
  return (
    <Routes>
      <Route path='*' element={<PageNotFound />} />
       <Route path="/day8/todo" element={<Todo/>} />
       
       <Route path="/" element={<DayNavigation />} />
       <Route path="/day2/array" element={<Array/>} />
       <Route path="/day2/calc" element={<Calc />} />
       <Route path="/day2/condition" element={<Condition />} />
       <Route path="/day2/multiplication" element={<Multiplication/>} />
       <Route path="/day2/variable" element={<Variable/>} />
       
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/userlist" element={<ViewUser/>} />
            <Route path="/user-details/:id" element={<UserDetails/>} />
        </Route>

    </Routes>
  )
}
