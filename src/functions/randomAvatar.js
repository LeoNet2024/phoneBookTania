export default function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * 6) + 1;
  return `/avatars/avatar${randomIndex}.png`;
}
