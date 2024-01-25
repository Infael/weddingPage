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
        key: '75610f6c-97c2-48c1-861e-afb17e45aeae',
        invite_accepted: null
      });
      server.create('guest', {
        id: '3',
        guest_id: 3,
        email: 'daniela.kohutova@fancy.com',
        name: 'Daniela Kohutova',
        key: '12345',
        invite_accepted: true
      });
    },

    routes() {
      this.urlPrefix = 'https://eo-be.vercel.app/api';

      this.get('/guest-invite/', (schema, request) => {
        const guest = schema.db.guests.findBy({ key: request.requestHeaders['Authorization'] });
        if (!guest) {
          return new Response(
            404,
            {},
            { error: `guest key ${request.requestHeaders['Authorization']} not found!` }
          );
        }
        return guest;
      });
    }
  });

  return server;
}
