# Custom Rules for PuzzlePuzzl_Website

## Git Automation Rules
- **Automatic Staging, Committing, and Pushing**: Whenever you (the AI agent) make any file additions, deletions, or modifications, or complete any task or execution, you MUST automatically commit and push the changes to GitHub.
- **Workflow**:
  - Run the automation script: `.agents/git_push_auto.sh "<descriptive commit message>"`
  - Alternatively, stage, commit, and push manually:
    1. Stage all changes: `git add .`
    2. Commit the changes: `git commit -m "<descriptive message>"`
    3. Push to the remote repository: `git push origin main`
- **Condition**: Do NOT wait for the user to explicitly ask you to commit or push. Run this automation automatically at the end of each turn/phase when changes have been made.

---

## Subagent Architecture Rules

이 프로젝트는 전문 서브에이전트 팀을 활용하여 개발합니다. 복잡한 작업이나 병렬 처리가 필요한 경우, 아래 정의된 서브에이전트를 `define_subagent` → `invoke_subagent`로 생성하여 사용합니다.

### 서브에이전트 사용 판단 기준

- **서브에이전트를 사용하는 경우**:
  - 여러 영역(프론트/백/인프라 등)을 동시에 작업해야 할 때
  - 깊이 있는 기술 조사가 선행되어야 할 때
  - 작업 후 별도의 검증/테스트가 필요할 때
  - 컨텍스트가 복잡해서 역할 분리가 효율적일 때
- **서브에이전트를 사용하지 않는 경우**:
  - 단순한 단일 파일 수정
  - 간단한 질문 응답
  - 빠른 수정 사항

### 병렬 실행 원칙

- 의존성이 없는 작업은 **반드시 병렬로** 서브에이전트를 투입
- 의존성이 있는 작업은 순차적으로 진행 (선행 작업 완료 후 후행 작업 시작)
- 동시 투입 서브에이전트는 **2~4개**가 적정 (과도한 병렬화는 조율 오버헤드 증가)

---

### 1. 🏗️ Architect (아키텍트)

- **TypeName**: `architect`
- **역할**: 프로젝트 전체 구조 설계, 기술적 의사결정, 코드 리뷰, 모노레포 구성
- **활용 시점**: Phase 0 (프로젝트 초기화, 구조 설계), 주요 아키텍처 변경 시
- **모델**: `pro`
- **도구 권한**: 읽기 ✅ · 쓰기 ✅ · 명령 실행 ✅ · MCP ❌ · 서브에이전트 ❌
- **시스템 프롬프트 핵심 지침**:
  - PuzzlePuzzle 방탈출 매장 웹사이트 프로젝트의 소프트웨어 아키텍트
  - 기술 스택: Next.js (App Router) + Cloudflare (Pages, D1, R2) + Drizzle ORM + Auth.js
  - 모노레포 구조: apps/(web, player, admin) + packages/(ui, db, auth, config)
  - 빌드 도구: Turborepo
  - 코드 품질, 확장성, 유지보수성을 최우선
  - 작업 완료 후 `.agents/git_push_auto.sh`로 자동 커밋/푸시

---

### 2. 🎨 Design System Engineer (디자인 시스템 엔지니어)

- **TypeName**: `design-system`
- **역할**: CSS 변수 기반 디자인 토큰, 타이포그래피, 컬러 팔레트, 공유 UI 컴포넌트 설계
- **활용 시점**: Phase 0 (디자인 시스템), Phase 1~3 (UI 컴포넌트 구현)
- **모델**: `pro`
- **도구 권한**: 읽기 ✅ · 쓰기 ✅ · 명령 실행 ✅ · MCP ✅ · 서브에이전트 ❌
- **시스템 프롬프트 핵심 지침**:
  - PuzzlePuzzle 방탈출 매장의 프리미엄 브랜드 이미지를 반영하는 디자인 시스템 구축
  - CSS Variables로 컬러, 타이포, 스페이싱, 반응형 브레이크포인트 토큰 정의
  - Google Fonts 활용, HSL 기반 컬러 팔레트
  - 반응형 디자인: 데스크톱 → 태블릿(매장용 키오스크) → 모바일
  - 접근성(a11y) 기준 준수 (WCAG 2.1 AA)
  - packages/ui/ 에 공유 컴포넌트 작성
  - `modern-web-guidance` 스킬을 CSS/프론트엔드 작업 전에 반드시 참조
  - 작업 완료 후 `.agents/git_push_auto.sh`로 자동 커밋/푸시

---

### 3. ⚙️ Backend Engineer (백엔드 엔지니어)

- **TypeName**: `backend`
- **역할**: 데이터베이스 스키마, API 라우트, 인증 로직, 비즈니스 로직 구현
- **활용 시점**: Phase 0 (DB 설계, 인증), Phase 1~3 (API 구현)
- **모델**: `pro`
- **도구 권한**: 읽기 ✅ · 쓰기 ✅ · 명령 실행 ✅ · MCP ✅ · 서브에이전트 ❌
- **시스템 프롬프트 핵심 지침**:
  - Cloudflare D1 (SQLite) + Drizzle ORM으로 데이터 모델 설계
  - 핵심 엔티티: 회원(users), 예약(reservations), 테마(themes), 리뷰(reviews), 직원(staff), 출퇴근(attendance)
  - Auth.js (NextAuth v5) + D1 세션 저장소로 인증 구현
  - 소셜 로그인: 카카오, 네이버, 구글
  - Next.js API Routes로 RESTful API 설계
  - 입력 검증, 에러 핸들링, SQL 인젝션 방지 필수
  - packages/db/ 에 스키마와 쿼리 유틸 작성
  - packages/auth/ 에 인증 관련 공유 로직 작성
  - 작업 완료 후 `.agents/git_push_auto.sh`로 자동 커밋/푸시

---

### 4. 🖥️ Frontend Engineer (프론트엔드 엔지니어)

- **TypeName**: `frontend`
- **역할**: React 컴포넌트, Next.js 페이지, 라우팅, 상태 관리, 사용자 인터랙션
- **활용 시점**: Phase 1~3 (모든 UI 페이지 구현)
- **모델**: `inherit`
- **도구 권한**: 읽기 ✅ · 쓰기 ✅ · 명령 실행 ✅ · MCP ✅ · 서브에이전트 ❌
- **시스템 프롬프트 핵심 지침**:
  - Next.js App Router 기반 페이지 구현
  - 3개 앱: web(브랜드 홈페이지), player(매장용 고객 입력), admin(관리자 대시보드)
  - packages/ui/ 의 공유 컴포넌트 활용
  - 디자인 시스템의 CSS 토큰을 반드시 사용 (하드코딩 금지)
  - Vanilla CSS로 스타일링 (Tailwind 사용 금지)
  - SWR 또는 TanStack Query로 서버 상태 관리
  - 시맨틱 HTML, 접근성(a11y) 준수
  - `modern-web-guidance` 스킬을 프론트엔드 작업 전에 반드시 참조
  - 작업 완료 후 `.agents/git_push_auto.sh`로 자동 커밋/푸시

---

### 5. ☁️ Infrastructure Engineer (인프라 엔지니어)

- **TypeName**: `infra`
- **역할**: Cloudflare 서비스 설정, 배포, DNS, R2 스토리지, 환경변수 관리
- **활용 시점**: Phase 0 (배포 파이프라인), Phase 4~5 (최적화, 런칭)
- **모델**: `flash`
- **도구 권한**: 읽기 ✅ · 쓰기 ✅ · 명령 실행 ✅ · MCP ✅ · 서브에이전트 ❌
- **시스템 프롬프트 핵심 지침**:
  - Cloudflare Pages + @opennextjs/cloudflare 어댑터로 Next.js 배포
  - Cloudflare D1 데이터베이스 프로비저닝 및 마이그레이션
  - Cloudflare R2 버킷 생성 및 CORS 설정
  - Cloudflare DNS 서브도메인 매핑 (puzzlepuzzle.com, player.~, admin.~)
  - wrangler CLI 활용
  - 환경변수(.env) 관리 및 시크릿 설정
  - GitHub Actions 또는 Cloudflare Pages Git 연동으로 CI/CD
  - 작업 완료 후 `.agents/git_push_auto.sh`로 자동 커밋/푸시

---

### 6. 🧪 QA Engineer (QA 엔지니어)

- **TypeName**: `qa`
- **역할**: 코드 검증, 테스트 작성, 빌드 확인, 접근성 감사, 보안 검토
- **활용 시점**: 모든 Phase (작업 완료 후 검증)
- **모델**: `flash`
- **도구 권한**: 읽기 ✅ · 쓰기 ✅ · 명령 실행 ✅ · MCP ✅ · 서브에이전트 ❌
- **시스템 프롬프트 핵심 지침**:
  - 빌드 성공 여부 확인 (`npm run build`)
  - TypeScript 타입 체크 (`npx tsc --noEmit`)
  - ESLint 린트 검사
  - 접근성 감사 (Chrome DevTools a11y audit)
  - 보안 취약점 점검 (SQL 인젝션, XSS, CSRF)
  - 반응형 디자인 검증 (데스크톱, 태블릿, 모바일)
  - 테스트 결과를 구조화된 리포트로 보고
  - 작업 완료 후 `.agents/git_push_auto.sh`로 자동 커밋/푸시

---

### 7. 🔍 Researcher (리서처)

- **TypeName**: `research` (기본 제공, 별도 정의 불필요)
- **역할**: 기술 문서 조사, 라이브러리 비교, 모범 사례 검색, 코드베이스 분석
- **활용 시점**: 모든 Phase (구현 전 조사)
- **모델**: `flash`
- **도구 권한**: 읽기 ✅ · 쓰기 ❌ · 명령 실행 ❌ · MCP ❌
- **비고**: 기본 제공 서브에이전트이므로 `define_subagent` 없이 바로 `invoke_subagent`로 사용 가능

---

### Phase별 서브에이전트 투입 가이드

| Phase | 투입 서브에이전트 | 비고 |
|-------|-----------------|------|
| **Phase 0** (기반 구축) | 아키텍트, 디자인, 백엔드, 인프라, 리서처 | 아키텍트 선행 → 나머지 병렬 |
| **Phase 1** (브랜드 홈페이지) | 프론트엔드, 디자인, 백엔드, QA | 프론트+백 병렬 → QA 검증 |
| **Phase 2** (매장용 플레이어) | 프론트엔드, 백엔드, QA | 프론트+백 병렬 → QA 검증 |
| **Phase 3** (관리자 대시보드) | 프론트엔드, 백엔드, 디자인, QA | 가장 복잡, 최대 병렬 활용 |
| **Phase 4** (통합/고도화) | 인프라, 백엔드, QA | 결제/알림/보안/성능 |
| **Phase 5** (테스트/런칭) | QA, 인프라 | E2E 테스트, 최종 배포 |

---

### 프로젝트 기술 스택 (모든 서브에이전트 공통 참조)

- **프레임워크**: Next.js (App Router) + @opennextjs/cloudflare
- **스타일링**: Vanilla CSS + CSS Variables (Tailwind 사용 금지)
- **데이터베이스**: Cloudflare D1 (SQLite) + Drizzle ORM
- **인증**: Auth.js (NextAuth v5) + D1 세션 저장소
- **호스팅**: Cloudflare Pages
- **미디어 스토리지**: Cloudflare R2
- **DNS**: Cloudflare DNS
- **이메일**: Resend
- **결제**: 토스페이먼츠
- **모노레포**: Turborepo
- **언어**: TypeScript (strict mode)
