if (window.supabase) {
  try {
    window.supabaseClient = window.supabase.createClient(
      "https://cmrevzajvnjdzuyaajzh.supabase.co",
      "sb_publishable_2MxvnAg6yWyoDibWfA2Gxw_ZBmQeZ2o"
    );
  } catch (error) {
    console.warn("Supabase failed to initialize:", error);
    window.supabaseClient = null;
  }
} else {
  console.warn("Supabase SDK did not load. Using local storage fallback.");
  window.supabaseClient = null;
}
