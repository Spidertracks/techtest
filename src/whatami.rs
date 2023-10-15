use std::cmp::Ord;

fn myfn(arr: &mut [T]) {
    let len = arr.len();
    let mut j;
    loop {
        j = false;
        for i in 0..len - 1 {
            if arr[i] > arr[i + 1] {
                arr.swap(i, i + 1);
                j = true;
            }
        }
        if !j {
            break;
        }
    }
}

fn main() {
    let mut nums = vec![5, 3, 1, 4, 2];
    myfn(&mut nums);    
}					
