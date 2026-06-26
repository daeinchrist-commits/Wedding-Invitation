/* ── CONFIG: set your RSVP email here ── */
const RSVP_EMAIL = 'your@email.com';

function closeModal() {
  document.getElementById('rsvpModal').classList.remove('open');
  // reset form
  document.getElementById('rsvpForm').style.display = '';
  document.getElementById('rsvpSuccess').style.display = 'none';
}

function sendRSVP() {
  const name   = document.getElementById('rsvpName').value.trim();
  const email  = document.getElementById('rsvpEmail').value.trim();
  const attend = document.getElementById('rsvpAttending').value;
  const guests = document.getElementById('rsvpGuests').value;
  const notes  = document.getElementById('rsvpNotes').value.trim();

  if (!name || !email) {
    alert('Please enter your name and email.');
    return;
  }

  const subject = encodeURIComponent(`RSVP — ${name}`);
  const body    = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nAttending: ${attend === 'yes' ? 'Yes' : 'No'}\nGuests: ${guests}\nDietary Notes: ${notes || 'None'}`
  );

  /* Opens the user's mail client pre-filled */
  window.location.href = `mailto:${RSVP_EMAIL}?subject=${subject}&body=${body}`;

  /* Show success message */
  document.getElementById('rsvpForm').style.display = 'none';
  document.getElementById('rsvpSuccess').style.display = 'block';
}

/* Close modal when clicking outside of it */
document.getElementById('rsvpModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
