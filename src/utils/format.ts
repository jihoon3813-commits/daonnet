/**
 * 전화번호 자동 하이픈 포맷터 (한국 전화번호 기준)
 * - 010, 011 등 휴대폰: 010-XXXX-XXXX (11자리 또는 10자리)
 * - 서울(02): 02-XXX-XXXX (9자리) / 02-XXXX-XXXX (10자리)
 * - 지역번호(031, 051 등): 031-XXX-XXXX (10자리) / 031-XXXX-XXXX (11자리)
 * - 전국 대표번호(1588, 1877 등 8자리): 1877-8816
 * - 4자리 이하 (조회용 뒷자리 등): 그대로 유지
 */
export function formatPhoneNumber(val: string): string {
  if (!val) return "";

  // 숫자만 추출
  const clean = val.replace(/[^0-9]/g, "");

  // 1. 전국 대표번호 (15xx, 16xx, 18xx 등 8자리 번호)
  if (!clean.startsWith("0")) {
    const num = clean.slice(0, 8);
    if (num.length <= 4) return num;
    return `${num.slice(0, 4)}-${num.slice(4)}`;
  }

  // 2. 서울 지역번호 (02)
  if (clean.startsWith("02")) {
    const num = clean.slice(0, 10);
    if (num.length <= 2) return num;
    if (num.length <= 5) return `${num.slice(0, 2)}-${num.slice(2)}`;
    if (num.length <= 8) return `${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5)}`;
    if (num.length === 9) {
      return `${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5)}`;
    }
    // 10자리: 02-xxxx-xxxx
    return `${num.slice(0, 2)}-${num.slice(2, 6)}-${num.slice(6)}`;
  }

  // 3. 010 등 일반 휴대폰 및 지역번호 (최대 11자리)
  const num = clean.slice(0, 11);
  if (num.length <= 3) return num;
  if (num.length <= 6) return `${num.slice(0, 3)}-${num.slice(3)}`;
  if (num.length <= 7) return `${num.slice(0, 3)}-${num.slice(3)}`;

  // 8~10자리
  if (num.length <= 10) {
    if (num.startsWith("010")) {
      // 010은 11자리가 기본이므로 4자리 국번을 고정하여 010-xxxx-xxx 형태로 점진적 표시
      return `${num.slice(0, 3)}-${num.slice(3, 7)}-${num.slice(7)}`;
    }
    // 031 등 10자리 유선전화는 3-3-4
    if (num.length === 10) {
      return `${num.slice(0, 3)}-${num.slice(3, 6)}-${num.slice(6)}`;
    }
    return `${num.slice(0, 3)}-${num.slice(3, 6)}-${num.slice(6)}`;
  }

  // 11자리: 3-4-4
  return `${num.slice(0, 3)}-${num.slice(3, 7)}-${num.slice(7)}`;
}
