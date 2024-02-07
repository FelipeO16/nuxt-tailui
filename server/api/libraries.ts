import { serverSupabaseServiceRole } from "#supabase/server";

export default eventHandler(async (event) => {
  // const client = await serverSupabaseClient(event);
  // const user = await serverSupabaseUser(event);
  const client = serverSupabaseServiceRole(event);

  const { data } = await client
    .from("libraries")
    .insert([
      { nome: "lib", created_at: new Date() },
      { nome: "lib", created_at: new Date() },
    ])
    .select();

  return { libraries: data };
});
