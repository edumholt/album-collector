import React from 'react';

interface AlbumProps {}

export const Album: React.FC<AlbumProps> = props => {
  return (
    <>
      <h1>Album</h1>
      <form name="contact" data-netlify="true">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="First Name" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
