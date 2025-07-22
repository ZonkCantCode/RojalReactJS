import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ViewUser from './day6/ViewUser';
import Home from './day6/Home';
import Layout from './Layout';
import UserDetails from './day6/UserDetails';
import PageNotFound from './PageNotFound';

import DayNavigation from './day7/Component/DayNavigation';

// Day 2
import Array from './day2/array';
import Calc from './day2/Calc';
import Condition from './day2/Condition';
import Multiplication from './day2/Multiplication';
import Variable from './day2/Variable';

// Day 3
import Merge from './day3/Merge';
import Object from './day3/Object';
import Result from './day3/Result';
import UserList from './day3/UserList';

// Day 4
import EmojiPicker from './day4/EmojiPicker';
import User from './day4/User';

// Day 5
import FocusInput from './day5/FocusInput';
import LiftingState from './day5/LiftingState';
import LoginForm from './day5/LoginForm';

// Day 8
import Todo from './day8/Todo';

// Day 9
import CompleteForm from './day9/CompleteForm';

export default function Path() {
  return (
    <Routes>
      {/* Root Page */}
      <Route path="/" element={<DayNavigation />} />

      {/* Day 2 */}
      <Route path="/day2/array" element={<Array />} />
      <Route path="/day2/calc" element={<Calc />} />
      <Route path="/day2/condition" element={<Condition />} />
      <Route path="/day2/multiplication" element={<Multiplication />} />
      <Route path="/day2/variable" element={<Variable />} />

      {/* Day 3 */}
      <Route path="/day3/merge" element={<Merge />} />
      <Route path="/day3/object" element={<Object />} />
      <Route path="/day3/result" element={<Result />} />
      <Route path="/day3/userlist" element={<UserList />} />

      {/* Day 4 */}
      <Route path="/day4/emojipicker" element={<EmojiPicker />} />
      <Route path="/day4/user" element={<User />} />

      {/* Day 5 */}
      <Route path="/day5/focusinput" element={<FocusInput />} />
      <Route path="/day5/liftingstate" element={<LiftingState />} />
      <Route path="/day5/loginform" element={<LoginForm />} />

      {/* Day 6 */}
      <Route path="/day6/home" element={<Home />} />
      <Route path="/day6/userdetails" element={<UserDetails />} />

      {/* Day 8 */}
      <Route path="/day8/todo" element={<Todo />} />

      {/* Optional: Original nested layout for consistency */}
      <Route path="/layout" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="userlist" element={<ViewUser />} />
        <Route path="user-details/:id" element={<UserDetails />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<PageNotFound />} />

      
      {/* Day 9 */}
      <Route path="/day9/stepform" element={<CompleteForm/>} />
    </Routes>
  );
}
