// age
// sex
// registration
// role
// phone_number
// avatar_url

export default interface ProfileCard {
  id: number | undefined;
  created_at: Date | undefined;
  first_name: string;
  last_name: string;
  age: number;
  sex: string;
  registration: string;
  role: string;
  phone_number: string;
  avatar_url: string;
}
