import os
import glob

replacements = {
    "Welcome to PuzzlePuzzle": "퍼즐퍼즐에 오신 것을 환영합니다",
    "Experience the best escape rooms in town.": "최고의 방탈출을 경험해보세요.",
    "Featured Themes": "추천 테마",
    "Image Placeholder": "이미지 준비중",
    "Genre: ": "장르: ",
    "Themes": "테마 목록",
    "Login": "로그인",
    "All rights reserved.": "모든 권리 보유.",
    "Mystery Mansion": "미스터리 맨션",
    "Horror": "공포",
    "Space Escape": "우주 탈출",
    "Sci-Fi": "SF",
    "Bank Heist": "은행 강도",
    "Action": "액션",
    "Dashboard": "대시보드",
    "Settings": "설정",
    "Puzzle Admin": "퍼즐 관리자",
    "Sign in with Google": "구글로 로그인",
    "Welcome back": "다시 오신 것을 환영합니다",
    "Total Themes": "전체 테마",
    "Today's Reservations": "오늘의 예약",
    "Daily Revenue": "일일 예상 매출",
    "Theme Status": "테마 현황",
    "Active": "활성",
    "Inactive": "비활성",
    "Edit": "수정",
    "Delete": "삭제",
    "Add Theme": "테마 추가",
    "Briefing settings": "브리핑 설정",
    "Require Signature": "서명 필수",
    "Enable/Disable player signature": "플레이어 서명 활성화/비활성화",
    "Show Briefing": "브리핑 노출",
    "Hero Image URL": "히어로 이미지 URL",
    "Save Settings": "설정 저장",
    "Title": "제목",
    "Genre": "장르",
    "Difficulty": "난이도",
    "Description": "설명",
    "Horror Level": "공포도"
}

files = []
for root, dirs, filenames in os.walk('apps'):
    for filename in filenames:
        if filename.endswith('.tsx') or filename.endswith('.ts'):
            files.append(os.path.join(root, filename))

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    for eng, kor in replacements.items():
        if eng in content:
            content = content.replace(eng, kor)
            modified = True
            
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Translated: {filepath}")
