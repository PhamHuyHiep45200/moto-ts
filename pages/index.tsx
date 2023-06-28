import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { UserState, decrement, increment } from "@/redux/slide/user.slide";
import React from "react";

function Index() {
  const { value } = useAppSelector((state: { userSlice: UserState }) => state.userSlice);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>add</button>
      <div>{value}</div>
      <button onClick={() => dispatch(decrement())}>minus</button>
    </div>
  );
}

export default Index;
