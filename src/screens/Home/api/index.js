/**
 Author - Saahil Madaan
 Git - https://bitbucket.org/techSavvySaahil/
 **/

 const fetchUserData = () => {
  const url = "http://www.mocky.io/v2/5ba8efb23100007200c2750c";
  return fetch(url);
};

export {fetchUserData};
