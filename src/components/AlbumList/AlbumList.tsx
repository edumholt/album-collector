import React from 'react';

interface AlbumListProps {}

export const AlbumList: React.FC<AlbumListProps> = props => {
  return (
    <>
      <h1>Album List</h1>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          First Name: <input type="text" name="firstName" />{' '}
        </label>
        <label>
          Last Name: <input type="text" name="lastName" />{' '}
        </label>
        <label>
          Last Name: <textarea name="message" />{' '}
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
