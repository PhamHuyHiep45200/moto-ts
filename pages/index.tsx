import { useUserControllerGetAllUsersQuery } from "@/redux/api/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { UserState, decrement, increment } from "@/redux/slide/user.slide";
import React, { useEffect } from "react";

function Index() {
  const { value } = useAppSelector((state:{user:UserState}) => state.user);
  const {data, isFetching} = useUserControllerGetAllUsersQuery({
    name: ''
  })
  const dispatch = useAppDispatch();
  useEffect(()=>{
    // eslint-disable-next-line no-console
    console.log(data, isFetching)
  },[isFetching])
  return (
    <div>
      <button onClick={() => dispatch(increment())}>add</button>
      <div>{value}</div>
      <button onClick={() => dispatch(decrement())}>minus</button>
    </div>
  );
}

export default Index;
