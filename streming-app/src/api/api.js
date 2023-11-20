import { useState, useEffect } from 'react';

function useGetHeader() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/query/getHeader')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function useGetShema() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/query/getSchema')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function useGetShemaPost(assestType) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/query/getSchema', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          assetType: assestType
        }
      )
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function useCreateAsset(asset) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/invoke/createAsset', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "asset": [
            asset
          ]
        }
      )
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function createAsset(asset) {
  let data;
  fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/invoke/createAsset', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        "asset": [
          asset
        ]
      }
    )
  })
    .then(response => response.json())
    .then(json => data = json)
    .catch(error => console.error(error));
  return (
    data
  );
}

function useReadAsset(key) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/query/readAsset', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "key": {
            "@key": key
          }
        }
      )
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function useSearch(assetType) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/query/search', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "query": {
            "selector": {
              "@assetType": assetType
            }
          }
        }
      )
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function useSearchKey(assetKey) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/query/search', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "query": {
            "selector": {
              "@key": assetKey
            }
          }
        }
      )
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function useUpdateAsset(asset) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/invoke/updateAsset', {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "update": asset
        }
      )
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    data ? data : false
  );
}

function deleteAsset(key) {
  let data;

  fetch('http://ec2-54-87-223-191.compute-1.amazonaws.com/api/invoke/deleteAsset', {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        "key": {
          "@key": key
        }
      }
    )
  })
    .then(response => response.json())
    .then(json => data = json)
    .catch(error => console.error(error));

  return (
    data ? data : false
  );
}



export { useGetHeader, useGetShema, useGetShemaPost, useCreateAsset, useReadAsset, useSearch, useUpdateAsset, deleteAsset, createAsset, useSearchKey };
