// @ts-nocheck
import { Model, Response, createServer } from 'miragejs';
import type { GuestInvite } from './models/GuestInvite';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      guest: Model.extend<GuestInvite>({})
    },

    seeds(server) {
      server.create('guest', {
        id: '2',
        guest_id: 2,
        email: 'michal.stefanak@fancy.com',
        name: 'Michal Stefanak',
        key: '0',
        invite_accepted: false
      });
      server.create('guest', {
        id: '3',
        guest_id: 3,
        email: 'daniela.kohutova@fancy.com',
        name: 'Daniela Kohutova',
        key: '1',
        invite_accepted: true
      });
      server.create('guest', {
        id: '4',
        guest_id: 4,
        email: 'null.void@fancy.com',
        name: 'Null Void',
        key: '42',
        invite_accepted: null
      });
    },

    routes() {
      this.urlPrefix = 'https://eo-be.vercel.app/api';

      this.get('/guest-invite/', (schema, request) => {
        const guest = schema.db.guests.findBy({ key: request.requestHeaders['Authorization'] });
        if (!guest) {
          return new Response(401, {}, 'Unauthorized guest');
        }
        return guest;
      });

      this.put('/guest-invite/', (schema, request) => {
        const guest = schema.db.guests.findBy({ key: request.requestHeaders['Authorization'] });
        if (!guest) {
          return new Response(401, {}, 'Unauthorized guest');
        }
        const attrs = JSON.parse(request.requestBody);
        console.log(attrs);
        const updatedGuest = schema.db.guests.update(guest.id, attrs);
        return updatedGuest;
      });
    }
  });

  return server;
}
