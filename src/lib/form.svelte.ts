const comment =
	'베이비스 트친소 폼 v0.1.2\n\
Designed / programmed by @mik__n\n\
이 트친소표의 내용은 예시입니다. 하단의 설명을 참고해서 사용해주세요.\n\
2차 수정 및 재배포를 금지합니다.';

const sampleForm: {
	[key in string]: { label: string; value: string; placeholder?: string };
} = {
	name: { label: '닉네임', value: '미키안', placeholder: '미키안' },
	id: { label: '트위터 아이디', value: 'mik__n', placeholder: 'mik__n' },
	age: { label: '나이', value: '성인', placeholder: '성인 / 청소년 / 비공개' },
	since: { label: '입덕 시기', value: '2024년 5월', placeholder: '2024년 5월' },
	how: { label: '입덕 계기', value: '재친구', placeholder: '재친구' },
	favorite: {
		label: '최애곡/최애앨범',
		value: 'One Kiss / Flower Garden',
		placeholder: 'One Kiss / Flower Garden'
	},
	toJJ: {
		label: '재중에게 한마디',
		value: '언제나 고맙고 사랑해💚',
		placeholder: '언제나 고맙고 사랑해♡'
	},
	tweet: {
		label: '트윗 성향',
		value: '사담, 타장르 이야기 많아요',
		placeholder: '사담, 타장르 이야기 많아요'
	},
	goodbye: {
		label: '이별 방법',
		value: '블언블 (편하게 해주세요)',
		placeholder: '언팔로우 / 블언블 / 블락'
	},
	etc: { label: '주의사항/기타', value: '알페스 싫어요', placeholder: '알페스 싫어요' },
	comment: {
		label: '하고싶은 말',
		value: comment,
		placeholder: '하고싶은 말을 자유롭게 적어주세요.'
	}
};

const formImg = $state({ loaded: false, img: '' });
const form = $state(sampleForm);
const formState = $state({ submitted: false });

function initForm() {
	formImg.loaded = false;
	formImg.img = '';

	Object.entries(form).forEach(([k, v]) => {
		form[k] = { ...v, value: '' };
	});

	formState.submitted = false;
}

initForm();

export { form, formImg, formState, initForm, sampleForm };
