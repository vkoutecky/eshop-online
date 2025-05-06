function generateHTML() {
  const nazev = document.getElementById('nazev').value;
  const zvyraznenyNazev = document.getElementById('zvyraznenyNazev').value;
  const rozmery = document.getElementById('rozmery').value;
  const obrazek = document.getElementById('obrazek').value; // bez .jpg

  const html = `
<div>
<!-- SEKCE - popis produktu -->
<div class="s_rightImg margin_bottom product_page_custom">
<div class="rightImg_text">
<h2 class="h2">${nazev}</h2>
<hr />
<p>Přívěsek na klíče nebo zavazadlo s logem letecké společnosti <b>${zvyraznenyNazev}</b>.</p>
<p>Klíčenka je precizně vyrobena s důrazem na detaily a vydrží i náročné používání.</p>
</div>
</div>
<!-- SEKCE KONEC - popis produktu -->
<!-- SEKCE - parametry -->
<div class="s_rightImg margin_bottom product_page_custom">
<div class="rightImg_text">
<h2 class="h2">Parametry</h2>
<hr />
<p><i class="fa-solid fa-up-right-and-down-left-from-center fa-2x"></i>Rozměry: <strong>${rozmery}</strong>.</p>
</div>
<div class="rightImg_img"><img src="/user/shop/orig/${obrazek}.jpg" alt="" /></div>
</div>
<!-- SEKCE KONEC - parametry -->
</div>
  `.trim();

  document.getElementById('vystup').value = html;
}

function resetForm() {
  document.getElementById('productForm').reset();
  document.getElementById('vystup').value = '';
}

function copyToClipboard() {
  const textarea = document.getElementById('vystup');
  textarea.select();
  textarea.setSelectionRange(0, 99999); // pro mobily

  try {
    document.execCommand('copy');
    showNotification();
  } catch (err) {
    alert('Nepodařilo se zkopírovat.');
  }
}

function showNotification() {
  const notification = document.getElementById('copyNotification');
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000); // zmizí za 2 sekundy
}
