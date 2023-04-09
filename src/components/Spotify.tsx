
let song: string;
let playSong: HTMLAudioElement;


const clientId: string = 'e62bddd6c7224bf9a0ddc5fbfa6445e4';
const clientSecret: string = '107cb5f65acc4e0b82aba4d9fdb52575';

const _getToken = async (): Promise<string> => {
  const result = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });


  const data = await result.json();
  return data.access_token;
};

// ----------------------------------------
// Function to get Song Info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 *
 */

async function clickedEvent(img_index: number, item_index: number): Promise<void> {

  let track: string = document.getElementsByTagName('img')[img_index].attributes[2].value;

  let token: string = await _getToken();

  let headers: HeadersInit = new Headers([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json'],
    ['Authorization', `Bearer ${token}`],
  ]);

  let request: Request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
    method: 'GET',
    headers: headers
  });

  let result = await fetch(request);

  let response = await result.json();

  console.log(response)
  song = response.tracks.items[item_index].preview_url;

// ----------------------------------------
/**
 * @param id
 * @param event
 *

 */


}
function getSong(id: string, event: MouseEvent): void {
    switch (id) {
        case 'fig1': {
        event.stopPropagation();
        clickedEvent(0, 0);
        break;
        }
}
}

export default getSong;

