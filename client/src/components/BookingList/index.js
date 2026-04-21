import React from "react";
import { RiUserLine, RiCloseLine } from "react-icons/ri";
import { cancelBooking } from "../../api";
import {
  Box, BoxTitle, List, Item, UserInfo,
  Avatar, UserMeta, UserName, BookedAt,
  CancelBtn, EmptyState, LoadingWrap, Spinner,
} from "./styledComponents";

export default function BookingList({ bookings, loading, onCancelled, onToast }) {
  const handleCancel = async (bookingId) => {
    try {
      await cancelBooking(bookingId);
      onToast("Booking cancelled", "success");
      onCancelled(bookingId);
    } catch (e) {
      onToast(e.message, "error");
    }
  };

  return (
    <Box>
      <BoxTitle>
        <RiUserLine style={{ verticalAlign: "middle", marginRight: 6 }} />
        Booked Members ({bookings.length})
      </BoxTitle>

      {loading ? (
        <LoadingWrap><Spinner /></LoadingWrap>
      ) : bookings.length === 0 ? (
        <EmptyState>
          <RiUserLine />
          <p>No bookings yet.</p>
          <p>Be the first to claim a spot!</p>
        </EmptyState>
      ) : (
        <List>
          {bookings.map((b) => (
            <Item key={b.id}>
              <UserInfo>
                <Avatar>{b.user_name[0].toUpperCase()}</Avatar>
                <UserMeta>
                  <UserName>{b.user_name}</UserName>
                  <BookedAt>
                    {new Date(b.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </BookedAt>
                </UserMeta>
              </UserInfo>
              <CancelBtn onClick={() => handleCancel(b.id)}>
                <RiCloseLine /> Cancel
              </CancelBtn>
            </Item>
          ))}
        </List>
      )}
    </Box>
  );
}