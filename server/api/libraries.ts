import { serverSupabaseServiceRole } from "#supabase/server";
import type ProfileCard from "@/interfaces/profile-card";

export default eventHandler(async (event) => {
  // const client = await serverSupabaseClient(event);
  // const user = await serverSupabaseUser(event);
  const client = serverSupabaseServiceRole(event);

  // let profiles = [
  //   {
  //     first_name: "Pedro",
  //     last_name: "Martins",
  //     role: "Cliente Métricas Desenvolvedor",
  //     registration: 101,
  //     phone_number: "+55 (43) 2822-2376",
  //     age: 30,
  //     sex: "male",
  //     avatar_url:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/596.jpg",
  //   },
  //   {
  //     first_name: "Melissa",
  //     last_name: "Santos",
  //     role: "Nacional Marca Engenheiro",
  //     registration: 4045,
  //     phone_number: "+55 (12) 6725-2435",
  //     age: 22,
  //     sex: "female",
  //     avatar_url: "https://avatars.githubusercontent.com/u/85098495",
  //   },
  //   {
  //     first_name: "Manuela",
  //     last_name: "Braga",
  //     role: "Investidor Contas Facilitador",
  //     registration: 672,
  //     phone_number: "(47) 80670-2478",
  //     age: 28,
  //     sex: "male",
  //     avatar_url:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/503.jpg",
  //   },
  //   {
  //     first_name: "Bruna",
  //     last_name: "Batista",
  //     role: "Chefe Otimização Designer",
  //     registration: 3823,
  //     phone_number: "(36) 66357-7074",
  //     age: 28,
  //     sex: "male",
  //     avatar_url:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1010.jpg",
  //   },
  //   {
  //     first_name: "Miguel",
  //     last_name: "Braga",
  //     role: "Humano Interações Supervisor",
  //     registration: 3353,
  //     phone_number: "(70) 6557-7853",
  //     age: 26,
  //     sex: "male",
  //     avatar_url: "https://avatars.githubusercontent.com/u/19525518",
  //   },
  //   {
  //     first_name: "Bernardo",
  //     last_name: "Barros",
  //     role: "Direto Assurance Administrador",
  //     registration: 1141,
  //     phone_number: "(18) 45508-0606",
  //     age: 18,
  //     sex: "female",
  //     avatar_url:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/393.jpg",
  //   },
  //   {
  //     first_name: "Maria Eduarda",
  //     last_name: "Carvalho",
  //     role: "Cliente Interações Estrategista",
  //     registration: 1554,
  //     phone_number: "(73) 88657-6190",
  //     age: 24,
  //     sex: "male",
  //     avatar_url: "https://avatars.githubusercontent.com/u/53755657",
  //   },
  //   {
  //     first_name: "Gúbio",
  //     last_name: "Costa",
  //     role: "Central Resposta Técnico",
  //     registration: 1886,
  //     phone_number: "(71) 45793-8358",
  //     age: 30,
  //     sex: "male",
  //     avatar_url:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg",
  //   },
  //   {
  //     first_name: "Isadora",
  //     last_name: "Moraes",
  //     role: "Regional Prestação de contas Especialista",
  //     registration: 5060,
  //     phone_number: "(39) 39019-2295",
  //     age: 20,
  //     sex: "male",
  //     avatar_url: "https://avatars.githubusercontent.com/u/15231075",
  //   },
  //   {
  //     first_name: "Mércia",
  //     last_name: "Reis",
  //     role: "Humano Qualidade Especialista",
  //     registration: 1603,
  //     phone_number: "(22) 9757-6193",
  //     age: 12,
  //     sex: "female",
  //     avatar_url: "https://avatars.githubusercontent.com/u/15378256",
  //   },
  // ];

  const { data } = await client.from("profiles").select("*");
  return { profiles: data } as { profiles: ProfileCard[] };
});
