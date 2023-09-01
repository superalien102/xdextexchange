type Color = string;
type Style = React.CSSProperties;

interface LifiSmallLogoProps {
  color?: Color;
  style?: Style;
}

export function LifiSmallLogo({ color, style }: LifiSmallLogoProps) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
<linearGradient id="OdX3C1xulekUyisLoPB4ba_BKCQPf8biWWs_gr1" x1="12.686" x2="35.58" y1="4.592" y2="41.841" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#OdX3C1xulekUyisLoPB4ba_BKCQPf8biWWs_gr1)" d="M42,8H6c-1.105,0-2,0.895-2,2v26c0,1.105,0.895,2,2,2h8v7.998	c0,0.891,1.077,1.337,1.707,0.707L24.412,38H42c1.105,0,2-0.895,2-2V10C44,8.895,43.105,8,42,8z"></path><path d="M22,34h4c0.552,0,1-0.448,1-1V21c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v12	C21,33.552,21.448,34,22,34z" opacity=".05"></path><path d="M22.227,33.5h3.547c0.401,0,0.727-0.325,0.727-0.727V21.227c0-0.401-0.325-0.727-0.727-0.727h-3.547	c-0.401,0-0.727,0.325-0.727,0.727v11.547C21.5,33.175,21.825,33.5,22.227,33.5z" opacity=".07"></path><radialGradient id="OdX3C1xulekUyisLoPB4bb_BKCQPf8biWWs_gr2" cx="-71.449" cy="44.231" r="5.108" gradientTransform="matrix(.7808 0 0 .7066 79.788 -15.853)" gradientUnits="userSpaceOnUse"><stop offset=".516"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><ellipse cx="24" cy="15.402" fill="url(#OdX3C1xulekUyisLoPB4bb_BKCQPf8biWWs_gr2)" opacity=".15" rx="3.988" ry="3.609"></ellipse><path fill="#fff" d="M24,17.732c1.7,0,2.65-1.068,2.65-2.388C26.65,14.024,25.647,13,24,13s-2.65,1.024-2.65,2.344	C21.35,16.664,22.3,17.732,24,17.732z"></path><rect width="4" height="12" x="22" y="21" fill="#fff"></rect>
</svg>
  );
}
