# 곁 GYEOT — Premium Life Partner

상위 시니어를 위한 프리미엄 라이프 파트너 멤버십 "곁(GYEOT)" 소개 랜딩 페이지입니다.
정적 HTML/CSS/JS로 제작되었으며, 별도의 빌드 과정 없이 Netlify에 바로 배포됩니다.

## 프로젝트 구조

```
gyeot-site/
├── index.html          # 메인 랜딩 페이지
├── css/
│   └── style.css       # 전체 스타일
├── js/
│   └── main.js         # 스크롤 애니메이션, 모바일 메뉴 동작
├── images/              # 히어로/동행 순간 사진
├── favicon.svg          # 브랜드 엠블럼 파비콘
├── netlify.toml          # Netlify 배포 설정
└── README.md
```

## SEO 설정 (구글/네이버)

이 프로젝트에는 다음이 이미 반영되어 있습니다:
- title / meta description / meta keywords (핵심 키워드: 시니어 라이프 파트너, 시니어 동행 서비스 등)
- Open Graph / Twitter Card (카카오톡·문자 링크 공유 미리보기용)
- JSON-LD 구조화 데이터 (Service 스키마)
- robots.txt, sitemap.xml
- google-site-verification / naver-site-verification meta 태그 (플레이스홀더 — 실제 발급 코드로 교체 필요)

**✅ 실제 도메인(`https://gyeot.netlify.app/`)으로 이미 반영 완료:**
- `index.html` (canonical, og:url, JSON-LD provider url)
- `robots.txt` (Sitemap 경로)
- `sitemap.xml` (loc 경로)

커스텀 도메인을 추가로 연결하시면, 그때 다시 한 번 이 값들을 새 도메인으로 교체해야 합니다.

## 배포 방법 (GitHub → Netlify 자동 배포)

1. 이 폴더 내용을 GitHub 저장소에 push
   ```bash
   git add -A
   git commit -m "설명"
   git push
   ```
2. Netlify 대시보드 → "Add new site" → "Import an existing project" → GitHub 저장소 선택
3. Build command는 비워두고 Publish directory는 `/` (루트)
4. 이후로는 push할 때마다 Netlify가 자동으로 재배포합니다.

## 주의사항

이 페이지는 사업 소개용 초안입니다. 실제 서비스 조건·가격·계약 내용은 변경될 수 있으며,
사업자등록·보험·파트너 위촉계약 등 법률·세무·노무 관련 사항은 전문가(세무사·노무사·변호사)의
최종 확인을 거쳐 운영되어야 합니다.
