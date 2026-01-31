export default defineEventHandler(async (event) => {
  const { limit } = event.context.params!;
  const query = getQuery(event);

  return await $fetch(
    `https://admindash.comcitybd.com/api/brands/Rongta/${limit}`,
    {
      params: query,
    }
  );
});
