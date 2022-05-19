async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="inventory-title"]').value;
    
  
    const response = await fetch(`/api/inventories`, {
      method: 'POST',
      body: JSON.stringify({
        title
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-inventory-form').addEventListener('submit', newFormHandler);