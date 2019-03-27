import axios from 'axios';

function ajax(url = '', opts = {}) {
  if (!url) {
    return;
  }

  const {
    method = 'get',
    data,
  } = opts;
  
  return axios({
    method,
    url,
    data,
  }).then(function(res) {
    return res.data;
  });
}

export default ajax;