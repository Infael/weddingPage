export interface GuestInvite {
  guest_id: number;
  email: string;
  name: string;
  key: string;
  invite_accepted: boolean | null;
}
