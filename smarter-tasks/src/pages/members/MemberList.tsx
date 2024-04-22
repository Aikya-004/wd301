/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from './MemberListItems';

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();
  const user = localStorage.getItem("userData");
  const currentUser = user ? JSON.parse(user) : null;

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <div>
        <h3>Signed-in User:</h3>
        {currentUser && (
          <>
            <p>Name: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
          </>
        )}
      </div>
      <MemberListItems />
    </div>
  );
};

export default MemberList;
